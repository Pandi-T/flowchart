import { AfterViewInit, Component, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { FcModel, FcNode, FlowchartConstants, NgxFlowchartComponent, UserCallbacks } from 'ngx-flowchart-dev';
import { of } from 'rxjs';
import { DELETE } from '@angular/cdk/keycodes';
import { FlowchartService } from './service/flowchart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @HostBinding('attr.tabindex')
  get tabindex(): string {
    return '0';
  }

  flowchartConstants = FlowchartConstants;

  nodeTypesFlowchartselected = [];
  nodeTypesModel: FcModel = {
    nodes: [],
    edges: []
  };

  flowchartselected = [];
  model: FcModel = {
    nodes: [],
    edges: []
  };
  nextNodeID = 10;
  nextConnectorID = 20;

  callbacks: UserCallbacks = {
    edgeDoubleClick: (event, edge) => {
      console.log('Edge double clicked.');
    },
    // edgeEdit: (event, edge) => {
    //   const label = prompt('Enter a link label:', edge.label);
    //   if (label) {
    //     edge.label = label;
    //   }
    // },
    edgeMouseOver: event => {
      console.log('mouserover');
    },
    isValidEdge: (source, destination) =>
      source.type === FlowchartConstants.rightConnectorType && destination.type === FlowchartConstants.leftConnectorType
    ,
    createEdge: (event, edge) => {
      if (!edge.label) {
        const label = prompt('Enter a link label:', 'New label');
        edge.label = label;
      }
      return of(edge);
    },
    dropNode: (event, node) => {
      const name = prompt('Enter a node name:', node.name);
      if (name) {
        node.name = name;
        node.id = (this.nextNodeID++) + '';
        node.connectors = [
          {
            id: (this.nextConnectorID++) + '',
            type: FlowchartConstants.leftConnectorType
          },
          {
            id: (this.nextConnectorID++) + '',
            type: FlowchartConstants.rightConnectorType
          }
        ];
        this.model.nodes.push(node);
      }
    },
    edgeAdded: edge => {
      console.log('edge added');
      console.log(edge);
    },
    nodeRemoved: node => {
      console.log('node removed');
      console.log(node);
    },
    edgeRemoved: edge => {
      console.log('edge removed');
      console.log(edge);
    },
    nodeCallbacks: {
      doubleClick: event => {
        console.log('Node was doubleclicked.');
      },
      nodeEdit: (event, node) => {
        const name = prompt('Enter a node name:', node.name);
        if (name) {
          node.name = name;
        }
      }
    }
  };

  modelData = [];

  selectedFile: File | null = null;
  uploadResponse: string = '';
  datas: any;
  selectedFlow: number = -1;
  uniqueID: string = "";
  processfilename: string = "";

  @ViewChild('fcCanvas', { static: true }) fcCanvas: NgxFlowchartComponent;

  constructor(private apiService: FlowchartService) {
    this.datas = {
      "1": "Start-> decrypt->getIV->getEncryptedContent->AESGCM->decrypt->End",
      "2": "Start-> decrypt->getIV->getEncryptedContent->Map Data-> AESGCM-> Generate-Error-1",
      "3": "Start-> encrypt-> GeneratelV-> AESGCM-> encrypt-> concatByteArray-> End",
      "4": "Start-> encrypt-> GeneratelV-> AESGCM-> Generate-Error-1",
      "5": "Start-> GetSecurityConfiguration->decrypt-> decrypt-> End",
      "6": "Start-> GetSecurityConfiguration->encrypt->encrypt->End",
      "7": "Start-> Group->Get Security Configuration-> Parse Security Configuration-> JDBC Query-> Map Data-›End",
      "8": "Start->Group->Get Security Configuration-> Parse Security Configuration-> JDBC Query-> Map Data->End",
      "processfilename": "abcdabcd",
      "uniqueID": "323123-3232432445-54656"
    }
      
    // if (this.datas) {
    //   if (this.datas.hasOwnProperty("processfilename")) {
    //     this.processfilename = this.datas["processfilename"];
    //     delete this.datas["processfilename"];
    //   }
    //   if (this.datas.hasOwnProperty("uniqueID")) {
    //     this.uniqueID = this.datas["uniqueID"];
    //     delete this.datas["uniqueID"];
    //   }
    //   let dataModel = [];

    //   Object.keys(this.datas).map((key)=> {
    //     dataModel.push({
    //       id: key,
    //       data: this.datas[key]
    //     })
    //   })
    //   console.log("AAAA 111 dataModel", dataModel);
    //   this.insertModel(dataModel);
    // }
    
    // this.apiService.getFlowCharts().subscribe(
    //   (data) => {
    //     console.log("AAAA 222 data", data);
    //   },
    //   (error) => {
    //     console.log("AAAA 222 error", error);
    //     // console.error('There was an error!', error);  // Handle any errors here
    //   }
    // );
  }

  insertModel(data?: any) {
    this.modelData = [];
    let models: FcModel = {
      nodes: [],
      edges: []
    };
    let datas: any;
    datas = data?.map((item) => {
      if (item.data) {
        return { id: item.id, data: item.data.split("->") }
      }
      return item
    })
    datas?.map((modelData) => {
      models = {
        nodes: [],
        edges: []
      };
      modelData?.data?.map((name, i) => {
        console.log(name)
        const node: FcNode = {
          name,
          readonly: false,
          class: 'red',
          id: (i + 2) + '',
          x: 50 + (i * 240),
          y: 100,
          connectors: [
            {
              type: FlowchartConstants.leftConnectorType,
              id: (i * 2 + 1) + ''
            },
            {
              type: FlowchartConstants.rightConnectorType,
              id: (i * 2 + 2) + ''
            }
          ]
        };
        const edges: any = {
          source: (i * 2 + 2) + '',
          destination: (i * 2 + 3) + '',
          label: ''
        }
        models.nodes.push(node);
        if (i != modelData?.data?.length - 1)
          models.edges.push(edges);

      })
      
      this.modelData.push(models)
    })
    console.log("AAAA 333 modelData", this.modelData)
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  fieldsChange(values: any, index) {
    console.log("AAAA 555", values, index)
    if(values?.target?.checked) {
      this.selectedFlow = index + 1;
      // this.selectedFlow.push({
      //   id: index + 1
      // })
    } else {
      this.selectedFlow = -1;
      // this.selectedFlow = this.selectedFlow.filter((item) => item.id !== index + 1);
    }
    console.log("AAAA selectedFlow", this.selectedFlow)
  }

  onSubmit() {
    const queryString = "uniqueID="+this.uniqueID+"&processfilename="+this.processfilename+"&transitionPath="+this.selectedFlow;
    const data = {
      "csiId": "169068",
      "appName": "migrationl-test2",
      "configUrl": "test",
      "groupId": "com.citi.gcg",
      "packaging": "jar",
      "projectId": "",
      "mainClassName": "TibcoTest"
    }
    // Handle form submission
    console.log("Form submitted!");
    this.apiService.postSelectedFlows(queryString, data)
        .subscribe(
          response => {
            this.selectedFlow = -1;
            console.log('Upload Response:', response);
          },
          error => {
            this.selectedFlow = -1;
            console.error('Error:', error);

            let link = document.createElement('a');
            const dataDownload = "C:\Users\kundanm\Desktop\Kundan.zip";
            link.href = "data:application/octet-stream;bace64,"+dataDownload;
            link.download = "flowchart.zip";
            document.body.appendChild(link);
            link.click();
          }
        );
  }


  onUpload(): void {
    if (this.selectedFile) {
      this.apiService.uploadFile(this.selectedFile)
        .subscribe(
          response => {
            this.uploadResponse = 'File uploaded successfully!';
            console.log('Upload Response:', response);
            
            this.insertModel(this.processData(response));
          },
          error => {
            this.uploadResponse = 'Error uploading file';
            console.error('Error:', error);
            this.insertModel(this.processData(this.datas));
          }
        );
    } else {
      this.uploadResponse = 'Please select a file first.';
    }
  }

  processData(datas): any{
    if (datas.hasOwnProperty("processfilename")) {
      this.processfilename = datas["processfilename"];
      delete datas["processfilename"];
    }
    if (datas.hasOwnProperty("uniqueID")) {
      this.uniqueID = datas["uniqueID"];
      delete datas["uniqueID"];
    }
    let dataModel = [];
    Object.keys(datas).map((key)=> {
      dataModel.push({
        id: key,
        data: datas[key]
      });
    });
    return dataModel;
  }

  download(){

  }

  ngOninit() {}

  ngAfterViewInit(): void {
  }
}
