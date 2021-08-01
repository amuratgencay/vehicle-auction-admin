import { IcerikYonetimiDTO, IcerikKategorisiService } from '@zyazilim/online-ihale-data';

export class IcerikYonetimiExtendedDTO extends IcerikYonetimiDTO {
    static columnDefs(service: IcerikKategorisiService): any[] {
        return [{
            key: 'id',
            name: 'Id',
            type: 'string',
            editorOptions: { readOnly: true },
            visible: false,
        },
        {
            key: 'kod',
            name: 'Kod',
            type: 'string',
            editorOptions: {},
            validators: [{
                type: 'required',
                message: 'Kod zorunludur',
            }],
            visible: true,
        },
        {
            key: 'kategoriId',
            name: 'Kategori',
            type: 'select',
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'gorunurMetin',
                itemsAsync: service.getAll()
            },
            visible: true,
        },
        {
            key: 'baslik',
            name: 'Başlık',
            type: 'string',
            editorOptions: {},
            visible: true,
        },
        {
            key: 'kucukResimUrl',
            name: 'Küçük Resim URL',
            type: 'string',
            editorOptions: {},
            visible: true,
        },
        {
            key: 'sira',
            name: 'Sıra',
            type: 'number',
            visible: true,
        },
        {
            key: 'deger',
            name: 'İçerik',
            type: 'string',
            colSpan: 2,
            editCellTemplate: 'htmlEditCellTemplate',
            editorOptions: { height: 190, toolbar: { items: ['bold', 'italic', 'underline', { formatName: 'size', formatValues: ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'] }] } },
            visible: false,
        },]
    }
}