export interface TrackInfo {
  cover: string;
  title: string;
  description: string | undefined;
  id: string;
  favorite: boolean;
}

export interface TrackInfoState {
  loading: boolean;
  tracks: TrackInfo[];
}
