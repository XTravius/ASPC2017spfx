import * as React from 'react';
import { css } from 'office-ui-fabric-react';
import styles from './MedicalNews.module.scss';
import { IMedicalNewsProps } from './IMedicalNewsProps';
import { IMedicalNewsState } from './IMedicalNewsState';
import * as $ from "jquery";

export default class MedicalNews extends React.Component<IMedicalNewsProps, IMedicalNewsState> {
  public constructor(props: IMedicalNewsProps) {
        super(props);
        this.state = { newsFromAPI: [] };
  }

  // Fetch news via REST API - JSON
  public componentDidMount() {    
    var serviceURL = "https://newsapi.org/v1/articles?source=techcrunch&apiKey=b1be0248228c44709d2a78b4c41f136a";
    $.ajax({
            url: serviceURL,
            type: "GET",
            dataType: "json",
            data: ""
        }).then((data) => {              
          this.setState({ newsFromAPI: data.articles });
        });

  }

  //Render our news feed
  public render(): React.ReactElement<IMedicalNewsProps> {    
    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={css('ms-Grid-row ms-fontColor-white', styles.row)}>             
              {this.state.newsFromAPI.map(obj => {
                return (                   
                    <div className={css('ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12', styles.newsBox)}>
                      <div className='ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg4'>
                        <a href={obj.url} target='_blank'>
                          <img src={obj.urlToImage} className='ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12' />
                        </a>
                      </div>
                      <div className='ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg8'>
                        <div>
                          <a href={obj.url} target='_blank' className={css('ms-font-xl ms-fontColor-white', styles.title, styles.newsStyling)}>
                            {obj.title}
                          </a>
                        </div>
                        <div className={css('ms-font-l ms-fontColor-white', styles.newsStyling)}>
                          {obj.description}
                        </div>
                        <div>
                          <div className='ms-font-s ms-fontColor-white'>
                            {obj.publishedAt}
                          </div>
                          <div className='ms-font-s ms-fontColor-white'>
                          {obj.author}
                          </div>
                        </div>
                      </div>                      
                    </div>                       
                  );
                })
              } 
          </div>
        </div>
      </div>
    );
  }
}
