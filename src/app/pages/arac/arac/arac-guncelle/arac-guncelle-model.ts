import { EnumsService, RenkService, KazanilanAracDurumService, AracVersiyonService, AracDurumService, RuhsatSahibiService, LokasyonService, AracGuncelleDTO, AracVersionDTO } from '@zyazilim/online-ihale-data';
import { map } from 'rxjs/operators';
import { AracVersiyonExtendedDTO } from '../../arac-versiyon/arac-versiyon-model';

export class AracGuncelleExtendedDTO extends AracGuncelleDTO {
    public static columnDefs(renkService: RenkService,
        enumsService: EnumsService,
        kazAracDurumService: KazanilanAracDurumService,
        versiyonService: AracVersiyonService,
        aracDurumService: AracDurumService,
        ruhsatSahibiService: RuhsatSahibiService,
        lokasyonService: LokasyonService) {
        return [{
            key: 'id',
            name: 'Id',
            type: 'string',
            editorOptions: { readOnly: true },
            validators: [{
                type: 'required',
                message: 'Id zorunludur',
            }],
            visible: false,
            groupKey: 'Arac',
        },
        {
            key: 'aracNo',
            name: 'Arac ID',
            type: 'number',
            editorOptions: { readOnly: true },
            visible: true,
            groupKey: 'Arac',
        },
        {
            key: 'plaka',
            name: 'Plaka',
            type: 'string',
            validators: [{
                type: 'required',
                message: 'Plaka zorunludur',
            },
            {
                type: 'custom',
                validationCallback: (e) => {
                    const regex = /^((0[0-9])|([1-7][0-9])|(8[0-1]))(([A-Z]{2})(\d{3,4})|([A-Z]{3})(\d{2,3})|([A-Z])(\d{4,5}))$/;
                    const isValid = e.value.toString().match(regex) != null;
                    return isValid;
                },
                message: 'Plaka geçersiz',
            }],
            editorOptions: {
            },
            visible: true,
            groupKey: 'Arac',
        },
        {
            key: 'tescilTarihi',
            name: 'Tescil Tarihi',
            type: 'date',
            format: 'dd.MM.yyyy',
            visible: true,
            groupKey: 'Arac',
        },
        {
            key: 'yili',
            name: 'Model Yılı',
            type: 'number',
            format: '',
            validators: [{
                type: 'required',
                message: 'Model Yılı zorunludur',
            }],
            visible: true,
            groupKey: 'Arac',
        },
        {
            key: 'sonKm',
            name: 'Son Km',
            type: 'number',
            format: {
                type: 'fixedPoint',
                precision: 0,
            },
            editorOptions: {
                format: {
                    type: 'fixedPoint',
                    precision: 0,
                },
            },
            validators: [{
                type: 'required',
                message: 'Son Km zorunludur',
            }],
            visible: true,
            groupKey: 'Arac',
        },
        {
            key: 'motorGucu',
            name: 'Motor Gücü',
            type: 'number',
            format: '#0 HP',
            editorOptions: { format: '#0 HP' },
            visible: true,
            groupKey: 'Arac',
        },
        {
            key: 'aracVersionId',
            name: 'Marka Model Versiyon',
            type: 'select',
            colSpan: 2,
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'uzunAd',
                itemsAsync: versiyonService.getAll(),
                searchEnabled: true,
            },
            visible: true,
            groupKey: 'Arac',
        },
        {
            key: 'aracAdi',
            colSpan: 2,
            name: 'Araç Adı',
            type: 'string',
            editorOptions: {},
            visible: true,
            groupKey: 'Arac',
        },
        {
            key: 'silindirHacmi',
            name: 'Silindir Hacmi',
            type: 'number',
            format: {
                type: 'fixedPoint',
                precision: 0,
            },
            editorOptions: {
                format: {
                    type: 'fixedPoint',
                    precision: 0,
                },
            },
            visible: true,
            groupKey: 'Arac',
        },
        {
            key: 'vitesTipi',
            name: 'Vites Tipi',
            type: 'select',
            editorOptions: {
                valueExpr: 'value',
                displayExpr: 'name',
                itemsAsync: enumsService.getVitesTipleri().pipe(map(m => {
                    return m;
                })),
            },
            visible: true,
            groupKey: 'Arac',
        },
        {
            key: 'yakitTipi',
            name: 'Yakıt Tipi',
            type: 'select',
            editorOptions: {
                valueExpr: 'value',
                displayExpr: 'name',
                itemsAsync: enumsService.getYakitTipleri().pipe(map(m => {
                    return m;
                })),
            },
            groupKey: 'Arac',
        },
        {
            key: 'renkId',
            name: 'Renk',
            type: 'select',
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'ad',
                itemsAsync: renkService.getAll(),
            },
            visible: true,
            groupKey: 'Arac',
        },
        // {
        //     key: 'sasiNo',
        //     name: 'Şasi No',
        //     type: 'string',
        //     visible: true,
        //     groupKey: 'Arac',
        // },
        // {
        //     key: 'motorNo',
        //     name: 'Motor No',
        //     type: 'string',
        //     visible: true,
        //     groupKey: 'Arac',
        // },
        {
            key: 'garantiDurumu',
            name: 'Garanti Durumu',
            type: 'boolean',
            visible: true,
            groupKey: 'Arac',
        },
        {
            key: 'hemenAl',
            name: 'Hemen Al',
            type: 'boolean',
            visible: true,
            groupKey: 'Arac',
        },
        {
            key: 'hasarli',
            name: 'Hasarli',
            type: 'boolean',
            visible: true,
            groupKey: 'Arac',
        },
            ,
        {
            key: 'sonBakimTarihi',
            name: 'Son Bakım Tarihi',
            type: 'date',
            format: 'dd.MM.yyyy',
            visible: true,
            groupKey: 'Diger',
        },
        {
            key: 'sonBakimKm',
            name: 'Son Bakım KM',
            type: 'number',
            format: {
                type: 'fixedPoint',
                precision: 0,
            },
            editorOptions: {
                format: {
                    type: 'fixedPoint',
                    precision: 0,
                },
            },
            visible: true,
            groupKey: 'Diger',
        },
        {
            key: 'sonMuayeneTarihi',
            name: 'Son Muayene Tarihi',
            type: 'date',
            format: 'dd.MM.yyyy',
            visible: true,
            groupKey: 'Diger',
        },
        {
            key: 'depozit',
            name: 'Depozito',
            type: 'number',
            format: {
                type: 'currency',
            },
            editorOptions: {
                format: {
                    type: 'currency',
                },
            },
            visible: true,
            groupKey: 'Diger',
        },
        {
            key: 'baslangicFiyati',
            name: 'Başlangıç Fiyatı',
            type: 'number',
            format: {
                type: 'currency',
            },
            editorOptions: {
                format: {
                    type: 'currency',
                },
            },
            visible: true,
            groupKey: 'Diger',
        },
        {
            key: 'hedefFiyat',
            name: 'Hedef Fiyat',
            type: 'number',
            format: {
                type: 'currency',
            },
            editorOptions: {
                format: {
                    type: 'currency',
                },
            },
            visible: true,
            groupKey: 'Diger',
        },
        {
            key: 'ekspertizPuani',
            name: 'Ekspertiz Puanı',
            type: 'number',
            format: '',
            visible: false,
            groupKey: 'Diger',
        },
        {
            key: 'aracDurumId',
            name: 'Araç Durumu',
            type: 'select',
            colSpan: 2,
            visible: true,
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'ad',
                itemsAsync: aracDurumService.getAll(),
                searchEnabled: true,
            },
            groupKey: 'Diger',
        },
        {
            key: 'ruhsatSahibiId',
            name: 'Ruhsat Sahibi',
            type: 'select',
            visible: true,
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'ad',
                itemsAsync: ruhsatSahibiService.getAll(),
                searchEnabled: true,
            },
            groupKey: 'Diger',
        },
        {
            key: 'lokasyonId',
            name: 'Lokasyon',
            type: 'select',
            visible: true,
            colSpan: 2,
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'ad',
                itemsAsync: lokasyonService.getAll(),
                searchEnabled: true,
            },
            groupKey: 'Diger',
        },
        {
            key: 'kazanilanAracDurumuId',
            name: 'Kazanılan Araç Durumu',
            colSpan: 2,
            type: 'select',
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'ad',
                itemsAsync: kazAracDurumService.getAll(),
            },
            visible: true,
            groupKey: 'Diger',
        },
        {
            key: 'aciklama',
            colSpan: 2,
            name: 'Açıklama',
            type: 'html',
            visible: true,
            editorOptions: { height: 190, toolbar: { items: ['bold', 'italic', 'underline', { formatName: 'size', formatValues: ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'] }] } },
            groupKey: 'Aciklamalar',
        },
        {
            key: 'ekspertizAciklama',
            colSpan: 2,
            name: 'Ekspertiz Açıklama',
            type: 'html',
            visible: true,
            editorOptions: { height: 190, toolbar: { items: ['bold', 'italic', 'underline', { formatName: 'size', formatValues: ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'] }] } },
            groupKey: 'Aciklamalar',
        },
        {
            key: 'seoMetaKeywords',
            name: 'SEO Meta Keywords',
            colSpan: 2,
            type: 'text',
            visible: true,
            groupKey: 'SEO',
        },
        {
            key: 'seoMetaDescription',
            name: 'SEO Meta Description',
            colSpan: 2,
            type: 'text',
            visible: true,
            groupKey: 'SEO',
        },
        {
            key: 'seoUrl',
            name: 'SEO URL',
            colSpan: 2,
            type: 'text',
            visible: true,
            groupKey: 'SEO',
        },
        {
            key: 'seoBaslik',
            name: 'SEO Başlık',
            colSpan: 2,
            type: 'text',
            visible: true,
            groupKey: 'SEO',
        }];
    }
}
