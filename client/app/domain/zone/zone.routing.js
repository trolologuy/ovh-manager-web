import controller from './domain-zone-dns.controller';
import template from './ZONE.html';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('app.domain.product.zone', {
    url: '/zone',
    views: {
      domainView: {
        template,
        controller,
        controllerAs: 'ctrlDomainTabZoneDns',
      },
    },
    atInternet: {
      rename: 'ZONE',
    },
    resolve: {
      activateZone: /* @ngInject */ $state => () => $state.go('app.domain.product.zone.activate'),
      goToZone: /* @ngInject */ $state => () => $state.go('app.domain.product.zone'),
    },
  });

  $stateProvider.state('app.domain.alldom.zone', {
    url: '/zone',
    views: {
      domainView: {
        template,
        controller,
        controllerAs: 'ctrlDomainTabZoneDns',
      },
    },
    atInternet: {
      rename: 'ZONE',
    },
    resolve: {
      activateZone: /* @ngInject */ $state => () => $state.go('app.domain.alldom.zone.activate'),
      goToZone: /* @ngInject */ $state => () => $state.go('app.domain.alldom.zone'),
    },
  });
};
