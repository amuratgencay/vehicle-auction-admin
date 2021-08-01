import { MarkaDTO } from '@zyazilim/online-ihale-data';

export class MarkaExtendedDTO extends MarkaDTO {
    public static columnDefs() {
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
        }];
    }
}
