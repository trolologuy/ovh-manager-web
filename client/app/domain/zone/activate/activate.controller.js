import JSURL from 'jsurl';
import { ORDER, TEMPLATES } from './activate.constants';

export default class DomainZoneActivateCtrl {
  /* @ngInject */
  constructor($window, constants) {
    this.$window = $window;
    this.constants = constants;

    this.TEMPLATES = TEMPLATES;
  }

  $onInit() {
    this.template = TEMPLATES.BASIC;
  }

  order() {
    const order = {
      ...ORDER,
      configuration: [
        {
          label: 'template',
          value: this.template,
        },
        {
          label: 'zone',
          value: this.domainName,
        },
      ],
    };

    this.$window.open(`${this.constants.ORDER_URL[this.user.ovhSubsidiary]}${JSURL.stringify([order])}`, '_blank');
  }
}
