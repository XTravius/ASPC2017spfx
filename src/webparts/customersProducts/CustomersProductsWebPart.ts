import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'customersProductsStrings';
import CustomersProducts from './components/CustomersProducts';
import { ICustomersProductsProps } from './components/ICustomersProductsProps';
import { ICustomersProductsWebPartProps } from './ICustomersProductsWebPartProps';

export default class CustomersProductsWebPart extends BaseClientSideWebPart<ICustomersProductsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICustomersProductsProps > = React.createElement(
      CustomersProducts,
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
