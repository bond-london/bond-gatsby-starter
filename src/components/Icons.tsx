import classNames from "classnames";
import React from "react";

interface Props {
  className?: string;
}

export const ArrowBackIcon: React.FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classNames(
      "icon inline-block stroke-current fill-current",
      className
    )}
  >
    <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
  </svg>
);

export const ArrowForwardIcon: React.FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classNames(
      "icon inline-block stroke-current fill-current",
      className
    )}
  >
    <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />
  </svg>
);

export const FacebookIcon: React.FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classNames("icon inline-block fill-current", className)}
  >
    <path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z" />
  </svg>
);

export const LinkedInIcon: React.FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classNames("icon inline-block fill-current", className)}
  >
    <path d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z" />
    <rect x="3" y="9.3" width="4.5" height="11.7" rx=".9" ry=".9" />
    <circle cx="5.25" cy="5.25" r="2.25" />
  </svg>
);

export const LocationIcon: React.FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classNames("icon inline-block fill-current", className)}
  >
    <path d="M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2zm0 11a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 13z" />
  </svg>
);

export const PhoneIcon: React.FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classNames("icon inline-block fill-current", className)}
  >
    <path d="M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22z" />
  </svg>
);

export const EmailIcon: React.FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classNames("icon inline-block fill-current", className)}
  >
    <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" />
  </svg>
);

export const AlertIcon: React.FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classNames(
      "icon inline-block stroke-current fill-current",
      className
    )}
  >
    <path d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zM12 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z" />
  </svg>
);

export const BlankIcon: React.FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classNames(
      "icon inline-block stroke-current fill-current",
      className
    )}
  />
);

export const BondLogoIcon: React.FC<Props> = ({ className }) => (
  <svg
    viewBox="0 0 800 800"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(
      "inline-block stroke-current fill-current",
      className
    )}
  >
    <polyline points="0 791.086142 43.9830212 791.086142 43.9830212 515.858177 343.721348 800 343.721348 424.938826 299.738327 424.938826 299.738327 699.852185 0 415.849189 0 791.086142"></polyline>
    <path d="M591.213983,43.7143571 C669.940574,43.7143571 733.988514,108.267665 733.988514,187.613483 C733.988514,266.9603 669.940574,331.513608 591.213983,331.513608 C512.486392,331.513608 448.439451,266.9603 448.439451,187.613483 C448.439451,108.267665 512.486392,43.7143571 591.213983,43.7143571 M591.213983,0.702122347 C487.98402,0.702122347 404.302622,84.3845194 404.302622,187.613483 C404.302622,290.842447 487.98402,374.524844 591.213983,374.524844 C694.443945,374.524844 778.125343,290.842447 778.125343,187.613483 C778.125343,84.3845194 694.443945,0.702122347 591.213983,0.702122347"></path>
    <path d="M672.266667,440.149813 C637.425218,424.880899 608.14382,424.828964 577.140574,424.828964 L428.309613,424.828964 L428.309613,791.086142 L576.987765,791.086142 C608.400499,791.086142 641.035705,791.033208 676.016979,775.205993 C739.954057,746.282147 778.126342,682.798502 778.126342,605.387266 C778.126342,532.080899 737.565044,468.762047 672.266667,440.149813 M657.732834,736.265668 C631.011236,748.288639 602.795506,748.288639 573.278402,748.288639 L472.286642,748.288639 L472.286642,467.607491 L574.420974,467.607491 C604.188764,467.607491 628.415481,467.892135 655.001248,479.544569 C705.166542,501.527091 734.621723,548.572285 734.621723,605.387266 C734.621723,666.43196 706.909363,714.135331 657.732834,736.265668"></path>
    <path d="M317.127591,187.995006 C340.566292,173.134582 356.546317,143.910112 356.546317,110.351061 C356.507366,67.4636704 333.442197,31.0731586 296.484395,15.1660424 C275.376779,6.08938826 244.126841,4.75605493 228.404494,4.75205993 L0.000998751561,4.75205993 L0.000998751561,370.987266 L228.404494,370.987266 C244.126841,370.982272 275.376779,369.648939 296.484395,360.572285 C333.442197,344.667166 356.507366,308.277653 356.546317,265.391261 C356.546317,228.416479 339.80824,197.222472 317.127591,187.995006 M312.566292,265.38427 C312.557303,290.582772 299.050187,311.402747 276.551311,321.084644 C266.438951,325.435206 248.072909,328.088889 227.299875,328.088889 L43.9820225,328.088889 L43.9820225,47.650437 L227.299875,47.650437 C248.072909,47.650437 266.438951,50.3051186 276.551311,54.6536829 C299.050187,64.337578 312.557303,85.1555556 312.566292,110.354057 C312.566292,162.345069 273.150562,182.460924 237.929588,188.827965 C273.030712,195.667416 312.566292,213.393258 312.566292,265.38427"></path>
  </svg>
);

export const CalendarIcon: React.FC<Props> = ({ className }) => (
  <svg
    viewBox="0 0 24 22"
    className={classNames("icon inline-block fill-current", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.8 2.8H18.4V0H16.8V2.8H7.2V0H5.6V2.8H1.2C0.881854 2.80037 0.576845 2.92692 0.351881 3.15188C0.126918 3.37684 0.000370522 3.68185 0 4V20.8C0.000370522 21.1181 0.126918 21.4232 0.351881 21.6481C0.576845 21.8731 0.881854 21.9996 1.2 22H22.8C23.1181 21.9996 23.4232 21.8731 23.6481 21.6481C23.8731 21.4232 23.9996 21.1181 24 20.8V4C23.9996 3.68185 23.8731 3.37684 23.6481 3.15188C23.4232 2.92692 23.1181 2.80037 22.8 2.8ZM22.4 20.4H1.6V4.4H5.6V6.4H7.2V4.4H16.8V6.4H18.4V4.4H22.4V20.4Z" />
    <path d="M11.4206 13.8631L9.00501 11.295L8 12.3635L11.4206 16L17 10.0684L15.9949 9L11.4206 13.8631Z" />
  </svg>
);

export const HamburgerIcon: React.FC<Props> = ({ className }) => (
  <svg
    width="24"
    height="16"
    viewBox="0 0 24 16"
    className={classNames("inline-block fill-current", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.7333 6.66675H1.26667C0.567106 6.66675 0 7.23385 0 7.93341V8.06675C0 8.76631 0.567106 9.33341 1.26667 9.33341H22.7333C23.4329 9.33341 24 8.76631 24 8.06675V7.93341C24 7.23385 23.4329 6.66675 22.7333 6.66675Z" />
    <path d="M22.7333 13.3333H1.26667C0.567106 13.3333 0 13.9004 0 14.5999V14.7333C0 15.4328 0.567106 15.9999 1.26667 15.9999H22.7333C23.4329 15.9999 24 15.4328 24 14.7333V14.5999C24 13.9004 23.4329 13.3333 22.7333 13.3333Z" />
    <path d="M22.7333 0H1.26667C0.567106 0 0 0.567106 0 1.26667V1.4C0 2.09956 0.567106 2.66667 1.26667 2.66667H22.7333C23.4329 2.66667 24 2.09956 24 1.4V1.26667C24 0.567106 23.4329 0 22.7333 0Z" />
  </svg>
);

const iconMap = {
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  Location: LocationIcon,
  Phone: PhoneIcon,
  Email: EmailIcon,
  Calendar: CalendarIcon,
  Hamburger: HamburgerIcon,
  Blank: BlankIcon,
};

export type IconType = keyof typeof iconMap;

export const Icon: React.FC<Props & { type: IconType }> = ({
  className,
  type,
}) => {
  const Element = iconMap[type];
  if (Element) {
    return <Element className={className} />;
  }
  return <AlertIcon className={className} />;
};
