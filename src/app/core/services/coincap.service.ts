import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EndPoints } from '@enums/endpoints.enum';
import { GetAssetsResponseDto } from '@store/assets/core/interfaces/get-assets-response-dto.interface';
import { PriceState } from '@core/interfaces/price-state.interface';

@Injectable()
export class CoincapService {
    private webSocket: WebSocket;

    constructor(private http: HttpClient) {}

    public getAssets(
        search: string[],
        ids: string[] = [],
        limit = 100
    ): Observable<GetAssetsResponseDto> {
        return this.http.get<GetAssetsResponseDto>(EndPoints.Assets, {
            params: { search, ids, limit: limit.toString() }
        });
    }

    public connectToPriceStream(assets: string[]): Observable<PriceState> {
        this.createConnection(assets);

        return new Observable(observer => {
            const webSocket = this.webSocket;

            webSocket.onmessage = (msg: MessageEvent) => {
                observer.next(JSON.parse(msg.data));
            };

            return {
                unsubscribe(): void {
                    webSocket.close();
                }
            };
        });
    }

    private createConnection(assets: string[]) {
        if (this.webSocket) {
            this.webSocket.close();
        }

        this.webSocket = new WebSocket(
            EndPoints.WebSocket + `?assets=${assets}`
        );
    }
}
