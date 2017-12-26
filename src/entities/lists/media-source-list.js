// @flow
import MediaSource from '../items/media-source'
import type {MediaSourceObject} from '../items/media-source'

export default class MediaSourceList {
  _list: Array<MediaSource> = [];

  get list(): Array<MediaSource> {
    return this._list;
  }

  set list(value: Array<MediaSourceObject>): void {
    this._list = [];
    value.forEach(m => {
      const ms = new MediaSource(m.mimetype, m.url, m.id);
      if (m.bandwidth) ms.bandwidth = m.bandwidth;
      if (m.width) ms.width = m.width;
      if (m.height) ms.height = m.height;
      if (m.drmData) ms.drmData = m.drmData;
      this._list.push(ms);
    });
  }

  toJSON(): Array<MediaSourceObject> {
    const response = [];
    this._list.forEach(item => response.push(item.toJSON()));
    return response;
  }
}
