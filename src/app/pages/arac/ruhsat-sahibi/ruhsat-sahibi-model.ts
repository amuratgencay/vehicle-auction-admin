import { RuhsatSahibiDTO } from '@zyazilim/online-ihale-data';

export class RuhsatSahibiExtendedDTO extends RuhsatSahibiDTO {

    public get displayExpr(): string {
        return `${this.ad}`;
    }
    static columnDefs(): any[] {
        return [{
            key: 'id',
            name: 'Id',
            type: 'number',
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
            cellTemplate: 'ruhsatSahibiDetailLink',
            editorOptions: {
                customParams: {
                    detailKey: 'id'
                }
            }
        },
        {
            key: 'adres',
            name: 'Adres',
            type: 'string',
            validators: [{
                type: 'required',
                message: 'Adres zorunludur',
            }],
            visible: true,
        },
        {
            key: 'aciklama',
            name: 'Açıklama',
            type: 'textarea',
            visible: true,
        }];
    }
}
