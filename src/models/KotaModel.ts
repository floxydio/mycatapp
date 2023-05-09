export interface KotaModel {
    kota_kabupaten: KotaKabupaten[];
}

export interface KotaKabupaten {
    id:          number;
    id_provinsi: string;
    nama:        string;
}
