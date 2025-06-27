import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare var alloy: any;

@Injectable({ providedIn: 'root' })
export class TargetService {
  private offerSubjects: { [scope: string]: BehaviorSubject<any> } = {};

  getOffer(scope: string): BehaviorSubject<any> {
    if (!this.offerSubjects[scope]) {
      this.offerSubjects[scope] = new BehaviorSubject<any>(null);
    }
    return this.offerSubjects[scope];
  }

  loadOffers(scopes: string[]) {
    
    // FAKE response to simulate alloy("sendEvent", ...)
    const fakeResponse = {
      propositions: scopes.map(scope => ({
        scope,
        items: [{
          data: this.getMockOffer(scope)
        }]
      }))
    };

    // Simulate async delay
    setTimeout(() => {
      fakeResponse.propositions.forEach((prop: any) => {
        const scope = prop.scope;
        const data = prop.items?.[0]?.data || {};

        if (!this.offerSubjects[scope]) {
          this.offerSubjects[scope] = new BehaviorSubject<any>(null);
        }

        console.log(`[TargetService] Sending offer for scope: ${scope}`, data);
        this.offerSubjects[scope].next(data);
      });
    }, 1000);
    // end FAKE response

    /* // Adobe Target call
    alloy("sendEvent", {
      decisionScopes: scopes
    }).then((result: any) => {
      
      result.propositions.forEach((prop: any) => {
        const scope = prop.scope;
        const data = prop.items?.[0]?.data || {};

        if (!this.offerSubjects[scope]) {
          this.offerSubjects[scope] = new BehaviorSubject<any>(null);
        }
        this.offerSubjects[scope].next(data);
      });
    });*/
  }


  // temp helper for simulated response
  private getMockOffer(scope: string) {
    switch (scope) {
      case 'banner-scope':
        return { title: '🔥 Banner Title from Target', message: 'Exclusive deal just for you!' };
      case 'card-scope':
        return { title: '🛍️ Card Title from Target', description: 'New arrivals available now.' };
      default:
        return { title: 'Default Title', message: 'Default Message' };
    }
  }

}
