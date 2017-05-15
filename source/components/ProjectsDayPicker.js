import { connect } from 'react-redux'
import {  browserHistory } from 'react-router'
import DayPicker from "react-day-picker";
import * as utils from '../lib/utils';
import { getAllSubscriptions } from '../actions/SubscriptionAction';

const weekdaysLong = {
  // Make sure you start with the right day of the week!
  es: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
}
const weekdaysShort = {
  // Idem
  es: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
  en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
}
const months = {
  es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
}
const firstDayOfWeek = {
  es: 0,
  en: 0,
}
const localeUtils = {
  formatDay: (d, locale = 'en') =>
    `${weekdaysLong[locale][d.getDay()]}, ${d.getDate()} ${months[locale][d.getMonth()]} ${d.getFullYear()}`,
  formatWeekdayShort: (index, locale = 'en') => weekdaysShort[locale][index],
  formatWeekdayLong: (index, locale = 'en') => weekdaysLong[locale][index],
  getFirstDayOfWeek: (locale) => firstDayOfWeek[locale],
  getMonths: (locale) => months[locale],
  formatMonthTitle: (d, locale) => `${months[locale][d.getMonth()]} ${d.getFullYear()}`,
}

const mapStateToProps = (state, ownProps) => {
  
  var modifiers = {};
  if(!utils.objectIsEmpty(state.subscription.content)){
    modifiers = {
      ['obra']: getObraDates(state.subscription.content.suscripciones_obra),
      ['reunion']: getEventoDates(state.subscription.content.suscripciones_reunion),
      ['proyecto']: getEventoDates(state.subscription.content.suscripciones_evento)
    }
  }

  return {
      locale: 'es',
      localeUtils: localeUtils,
      modifiers: modifiers
  }
}

function getObraDates(suscripciones_obra){

  var obras = suscripciones_obra.map(function(suscripcion){

    var fechas_obra = suscripcion.obra.obra_etapas.map(function(etapa){
      return getDateArray(etapa);
    });
    return [].concat.apply([], fechas_obra);

  });

  return [].concat.apply([], obras);
}

function getEventoDates(suscripciones_evento){

  var eventos = suscripciones_evento.map(function(suscripcion){
    return getDateArray(suscripcion.evento);
  });

  return [].concat.apply([], eventos);
}

function getDateArray(etapa){

  var fechas = [];

  if(etapa.fecha_desde){
    fechas.push(new Date(etapa.fecha_desde.replace(/Z+$/, '')));
  }

  if(etapa.fecha_hasta){
    fechas.push(new Date(etapa.fecha_hasta.replace(/Z+$/, '')));
  }

  return fechas;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDayClick: (day) => {
      var mm = day.getMonth() + 1;
      var dd = day.getDate();
      var fecha = [day.getFullYear(), (mm>9 ? '' : '0') + mm, (dd>9 ? '' : '0') + dd].join('-');

      browserHistory.push('/resultados?fecha='+fecha)
    }
  }
}

const ProjectsDayPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayPicker)

export default ProjectsDayPickerContainer