import { Injectable, ElementRef, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

/**
 * Utility service for the application
 * Common utility functions that can be used throughout the application 
 * @author Mohamed Omar Farook
 */
@Injectable()
export class CommonUtilityService {

    transferedState: any;

    constructor(
        @Inject(PLATFORM_ID) private plateformId: object,
        private http: HttpClient,
        private state: TransferState) { }

    /**
     * @param input object to be validated
     * @returns true if object is undefined or empty, otherwise false
     */
    isUndefinedOrEmpty(input: any) {
        if (undefined !== input && '' !== input) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * @param input object to be validated
     * @returns true if object is undefined or null, otherwise false
     */
    isNullOrUndefined(input: any) {
        if (undefined !== input && null !== input) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * Checks if application is running in browser
     */
    isBrowser(): boolean {
        if (isPlatformBrowser(this.plateformId)) {
            return true;
        } else {
            return false;
        }
    }

    /**
   * Set state value to transfer from seerver to client
   * @url key value to save it in server
    */
    setStateTransfer(url: string, header?: any) {
        const STATE = makeStateKey(url);
        this.transferedState = this.state.get(STATE, null as any);
        console.log('1st', this.transferedState);
        if (this.isBrowser() && this.transferedState) {
            console.log('2nd', this.transferedState);
            return of(this.transferedState);
        } else {
            return this.http.get<any>(url, { headers: header }).pipe(tap(response =>{
                console.log('3rd', response);
               this.state.set(STATE, response);
            }))
        }
    }
}