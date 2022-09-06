export interface TrackInfo {
  cover: string;
  title: string;
  description: string | undefined;
  id: string;
}

export interface TrackInfoState {
  loading: boolean;
  tracks: TrackInfo[];
}
