import { ModelDTO, MarkaService } from '@zyazilim/online-ihale-data';

export class ModelExtendedDTO extends ModelDTO {
    public get uzunAd(): string {
        return `${this.markaAd} --> ${this.ad}`;
    }
    static columnDefs(markaService: MarkaService): any[] {
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
            key: 'markaId',
            name: 'Marka',
            type: 'select',
            validators: [{
                type: 'required',
                message: 'Marka zorunludur',
            }],
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'ad',
                itemsAsync: markaService.getAll(),
            },
            visible: true,
        }];
    }
}
