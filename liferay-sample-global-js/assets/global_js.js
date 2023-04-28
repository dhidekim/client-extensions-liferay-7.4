/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

if(document.querySelectorAll('.speedwell-footer__closing nav a')[2]){
    document.querySelectorAll('.speedwell-footer__closing nav a')[0].href = 'https://xchangeray-lctptt23accenture-prd.lfr.cloud/privacy-policy'
    document.querySelectorAll('.speedwell-footer__closing nav a')[1].href = 'https://xchangeray-lctptt23accenture-prd.lfr.cloud/terms'
    document.querySelectorAll('.speedwell-footer__closing nav a')[2].href = 'https://xchangeray-lctptt23accenture-prd.lfr.cloud/legal-notice-patents'
 }


let template = '<div vw class="enabled">'+
    '<div vw-access-button class="active"></div>'+
    '<div vw-plugin-wrapper>'+
      '<div class="vw-plugin-top-wrapper"></div>'+
    '</div>'+
  '</div>';

document.querySelector('body').insertAdjacentHTML('afterbegin', template)
new window.VLibras.Widget('https://vlibras.gov.br/app');