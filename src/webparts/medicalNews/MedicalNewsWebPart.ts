import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'medicalNewsStrings';
import MedicalNews from './components/MedicalNews';
import { IMedicalNewsProps } from './components/IMedicalNewsProps';
import { IMedicalNewsWebPartProps } from './IMedicalNewsWebPartProps';

export default class MedicalNewsWebPart extends BaseClientSideWebPart<IMedicalNewsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMedicalNewsProps > = React.createElement(
      MedicalNews,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
