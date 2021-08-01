import { AracListeDTO, MarkaService, ModelService, AracVersiyonService, LokasyonService, KazanilanAracDurumService, AracDurumService, RuhsatSahibiService, RenkService, EnumsService } from '@zyazilim/online-ihale-data';
import { map } from 'rxjs/operators';

export class AracListeExtendedDTO extends AracListeDTO {

    public get plakaVeAracAdi() {
        return `${this.plaka} - ${this.aracAdi}`;
    }
    static columnDefs(markaService: MarkaService,
        modelService: ModelService,
        versiyonService: AracVersiyonService,
        lokasyonService: LokasyonService,
        kazAracDurumService: KazanilanAracDurumService,
        aracDurumService: AracDurumService,
        ruhsatSahibiService: RuhsatSahibiService,
        renkService: RenkService,
        enumsService: EnumsService): any[] {
        return [{
            key: 'id',
            name: 'Id',
            type: 'string',
            cellTemplate: 'aracDetailLink',
            validators: [{
                type: 'required',
                message: 'Id zorunludur',
            }],
            editorOptions: {
                readOnly: true,
                customParams: {
                    detailKey: 'id',
                },
            },
            visible: false,
        },
        {
            key: 'aracNo',
            name: 'Arac ID',
            type: 'number',
            cellTemplate: 'aracDetailLink',
            fixed: true,
            editorOptions: {
                readOnly: true,
                customParams: {
                    detailKey: 'id',
                },
            },
            visible: true,
        },
        {
            key: 'plaka',
            name: 'Plaka',
            type: 'string',
            fixed: true,
            cellTemplate: 'aracDetailLink',
            validators: [{
                type: 'required',
                message: 'Plaka zorunludur',
            }],
            editorOptions: {
                customParams: {
                    detailKey: 'id',
                },
            },
            visible: true,
        },
        {
            key: 'aracAdi',
            colSpan: 2,
            name: 'Araç Adı',
            type: 'string',
            fixed: true,
            visible: true,
            cellTemplate: 'aracDetailLink',
            editorOptions: {
                customParams: {
                    detailKey: 'id',
                },
            },
        },
        {
            key: 'aracVersionModelMarkaId',
            name: 'Marka',
            type: 'select',
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'ad',
                itemsAsync: markaService.getAll(),
                searchEnabled: true,
            },
            visible: true,
        },
        {
            key: 'aracVersionModelId',
            name: 'Model',
            type: 'select',
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'ad',
                itemsAsync: modelService.getAll(),
                searchEnabled: true,
            },
            visible: true,
        },
        {
            key: 'aracVersionId',
            name: 'Versiyon',
            type: 'select',
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'ad',
                itemsAsync: versiyonService.getAll(),
                searchEnabled: true,
            },
            visible: true,
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
        },
        {
            key: 'motorGucu',
            name: 'Motor Gücü',
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
        },
        {
            key: 'vitesTipi',
            name: 'Vites Tipi',
            type: 'select',
            editorOptions: {
                valueExpr: 'value',
                displayExpr: 'name',
                itemsAsync: enumsService.getVitesTipleri(),
            },
            visible: true,
        },
        {
            key: 'yakitTipi',
            name: 'Yakıt Tipi',
            type: 'select',
            editorOptions: {
                valueExpr: 'value',
                displayExpr: 'name',
                itemsAsync: enumsService.getYakitTipleri(),
            },
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
        },
        {
            key: 'sasiNo',
            name: 'Şasi No',
            type: 'string',
            visible: true,
        },
        {
            key: 'garantiDurumu',
            name: 'Garanti Durumu',
            type: 'boolean',
            visible: true,
        },
        {
            key: 'hemenAl',
            name: 'Hemen Al',
            type: 'boolean',
            visible: true,
        },
        {
            key: 'hasarli',
            name: 'Hasarli',
            type: 'boolean',
            visible: true,
        },
        {
            key: 'sonBakimTarihi',
            name: 'Son Bakım Tarihi',
            type: 'date',
            format: 'dd.MM.yyyy',
            visible: true,
        },
        {
            key: 'sonBakimKm',
            name: 'Son Bakım KM',
            type: 'number',
            format: '#.##',
            editorOptions: { format: '#.##' },
            visible: true,
        },
        {
            key: 'tescilTarihi',
            name: 'Tescil Tarihi',
            type: 'date',
            format: 'dd.MM.yyyy',
            visible: true,
        },
        {
            key: 'sonMuayeneTarihi',
            name: 'Son Muayene Tarihi',
            type: 'date',
            format: 'dd.MM.yyyy',
            visible: true,
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
        },
        {
            key: 'ekspertizPuani',
            name: 'Ekspertiz Puanı',
            type: 'number',
            format: '',
            visible: false,
        },
        {
            key: 'aracDurumId',
            name: 'Araç Durumu',
            type: 'select',
            visible: true,
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'ad',
                itemsAsync: aracDurumService.getAll(),
                searchEnabled: true,
            },
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
        },
        {
            key: 'lokasyonId',
            name: 'Lokasyon',
            type: 'select',
            visible: true,
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'ad',
                itemsAsync: lokasyonService.getAll(),
                searchEnabled: true,
            },
        },
        {
            key: 'kazanilanAracDurumuId',
            name: 'Kazanılan Araç Durumu',
            type: 'select',
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'ad',
                itemsAsync: kazAracDurumService.getAll(),
            },
            visible: true,
        }];
    }
}
