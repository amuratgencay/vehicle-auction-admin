import { AracVersionDTO, ModelService, MarkaService } from '@zyazilim/online-ihale-data';

export class AracVersiyonExtendedDTO extends AracVersionDTO {
    public get uzunAd(): string {
        return `${this.modelMarkaAd} --> ${this.modelAd} --> ${this.ad}`;
    }
    static columnDefs(modelService: ModelService,
        markaService: MarkaService = null): any[] {
        return [{
            key: 'id',
            name: 'Id',
            type: 'string',
            editorOptions: { readOnly: true },
            visible: false,
        },
        {
            key: 'ad',
            name: 'Ad',
            type: 'string',
            validators: [{
                type: 'required',
                message: 'Ad zorunludur',
            }],
            visible: true,
        },
        {
            key: 'modelId',
            name: 'Marka',
            type: 'select',
            validators: [{
                type: 'required',
                message: 'Model zorunludur',
            }],
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'uzunAd',
                itemsAsync: modelService.getAll(),
            },
            visible: true,
        }];
    }
}
