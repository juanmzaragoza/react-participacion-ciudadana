import { connect } from 'react-redux'
import {  browserHistory } from 'react-router'
import DayPicker from "react-day-picker";

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

    return {
        locale: 'es',
        localeUtils: localeUtils
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDayClick: (e, day) => {
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