import { RuhsatSahibiYetkiliDTO, UyeBilgiService, RuhsatSahibiService } from '@zyazilim/online-ihale-data';

export class RuhsatSahibiYetkiliExtendedDTO extends RuhsatSahibiYetkiliDTO {
    public static columnDefs(uyeBilgiService: UyeBilgiService,
        ruhsatSahibiService: RuhsatSahibiService): any[] {
        return [
            {
                key: 'id',
                name: 'Id',
                type: 'string',
                editorOptions: { readOnly: true },
                formItem: {
                    visible: false,
                },
                visible: false,
            },
            {
                key: 'ruhsatSahibiId',
                name: 'Ruhsat Sahibi',
                type: 'select',
                editorOptions: {
                    // customParams: {
                    //     detailKey: 'ruhsatSahibiId',
                    // },
                    itemsAsync: ruhsatSahibiService.getAll(),
                    displayExpr: 'displayExpr',
                    valueExpr: 'id'
                },
                // cellTemplate: 'ruhsatSahibiDetailLink',
                validators: [{
                    type: 'required',
                    message: 'Ruhsat Sahibi zorunludur',
                }],
            },
            {
                key: 'uyeBilgiId',
                name: 'Üye',
                type: 'select',
                editorOptions: {
                    // customParams: {
                    //     detailKey: 'uyeBilgiId',
                    // },
                    itemsAsync: uyeBilgiService.getAll(),
                    displayExpr: 'displayExpr',
                    valueExpr: 'id'
                },
                // cellTemplate: 'uyeBilgiDetailLink',
                validators: [{
                    type: 'required',
                    message: 'Üye zorunludur',
                }],
            }
        ];
    }
}