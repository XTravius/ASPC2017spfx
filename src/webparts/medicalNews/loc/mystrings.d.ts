declare interface IMedicalNewsStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'medicalNewsStrings' {
  const strings: IMedicalNewsStrings;
  export = strings;
}
