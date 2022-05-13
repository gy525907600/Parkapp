import { AxiosError } from 'axios';
import { IResponse } from '../../lib/model/api';

export function errorHandler(err: AxiosError<IResponse>){

    const msg = err.response?.data.msg ?? 'unknown error';
    const code = err.response?.status ?? -1;

    if (!err.response) {
      console.error('%c [ err ]-149', 'font-size:13px; background:pink; color:#bf2c9f;', err);
    }

    return { msg, code };
}
