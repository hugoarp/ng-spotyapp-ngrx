export interface RecommendationsResponse {
    tracks: Track[];
    seeds:  Seed[];
}

export interface Seed {
    initialPoolSize:    number;
    afterFilteringSize: number;
    afterRelinkingSize: number;
    id:                 string;
    type:               string;
    href:               string;
}

export interface Track {
    album:         Album;
    artists:       LinkedFrom[];
    disc_number:   number;
    duration_ms:   number;
    explicit:      boolean;
    external_ids:  ExternalIDS;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    is_local:      boolean;
    is_playable:   boolean;
    name:          string;
    popularity:    number;
    preview_url:   null | string;
    track_number:  number;
    type:          LinkedFromType;
    uri:           string;
    linked_from?:  LinkedFrom;
}

export interface Album {
    album_type:             AlbumType;
    artists:                LinkedFrom[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           Date;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumTypeEnum;
    uri:                    string;
}

export enum AlbumType {
    Album = "ALBUM",
    Compilation = "COMPILATION",
    Single = "SINGLE",
}

export interface LinkedFrom {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name?:         string;
    type:          LinkedFromType;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export enum LinkedFromType {
    Artist = "artist",
    Track = "track",
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export enum ReleaseDatePrecision {
    Day = "day",
}

export enum AlbumTypeEnum {
    Album = "album",
}

export interface ExternalIDS {
    isrc: string;
}
