import moment from "moment";
export const DATE_FORMAT_YYYYMMdd = "YYYYMMdd";
export const DATE_FORMAT_YYYY_MM_dd = "YYYY-MM-dd";
export const DATE_FORMAT_YYYY_MM_dd_Combined = "YYYYMMddHHmm";
export const DATE_FORMAT_YYYY_MM_dd_HH_mm = "YYYY-MM-dd HH:mm";
export const DATE_FORMAT_DD_MM_YYYY = "DD-MM-YYYY";
export const DATE_FORMAT_DD_MM_YYYY_WITH_DOT = "DD.MM.YYYY";
export const DATE_FORMAT_mm_dd_YYYY_WITH_SLASH = "MM/dd/YYYY";
export const DATE_FORMAT_m_d_YYYY_WITH_SLASH = "M/d/YYYY";
export const DATE_FORMAT_DD_MM_YYYY_WITH_SLASH = "DD/MM/YYYY";
export const DATE_FORMAT_dd_MMM = "ddMMM";
export const DATE_FORMAT_dd_MM_yy = "ddMMyy";
export const DATE_FORMAT_dd_MMM_YYYY = "ddMMMYYYY";
export const DATE_FORMAT_DD_MM_YYYY_COMBINED = "DDMMYYYY";
export const DATE_FORMAT_DD_MM_YYYY_HH_mm_ss = "YYYY-MM-dd'T'HH:mm:ss";
export const DATE_FORMAT_DD_MM_YYYY_HH_mm_ss_sz = "YYYY-MM-dd'T'HH:mm:ss.SSS";
export const DATE_FORMAT_DD_MM_YYYY_HH_mm = "dd-MM-YYYY HH:mm";
export const DATE_FORMAT_HH_mm = "HH:mm";
export const DATE_FORMAT_YYYY_MM_DDTHH_mm_ssZ = "YYYY-MM-DD'T'HH:mm:ssZ"; 




export const formatDate = (date, showTime = false) => {
    if (date == null || undefined) {
      return "--";
    }
    let d = new Date(date);
    if (showTime) {
      const newDate =
        d.toLocaleDateString([], { dateStyle: "medium" }) +
        " " +
        d.toLocaleTimeString([], { timeStyle: "short" });
      return newDate;
    }
    return d.toLocaleDateString([], { dateStyle: "medium" });
  };

  export const formatTime = (time)=>{
    moment(time, 'HH:mm:ss').format('h A');
  }