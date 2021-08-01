import { RenkDTO } from '@zyazilim/online-ihale-data';
export class RenkExtendedDTO extends RenkDTO {

    static columnDefs(): any[] {
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
