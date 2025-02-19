/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelsFileDataRow
 */
export interface ModelsFileDataRow {
    /**
     * 
     * @type {number}
     * @memberof ModelsFileDataRow
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsFileDataRow
     */
    originalFile?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsFileDataRow
     */
    previewFile?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsFileDataRow
     */
    seriesDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsFileDataRow
     */
    userId?: number;
}

/**
 * Check if a given object implements the ModelsFileDataRow interface.
 */
export function instanceOfModelsFileDataRow(value: object): value is ModelsFileDataRow {
    return true;
}

export function ModelsFileDataRowFromJSON(json: any): ModelsFileDataRow {
    return ModelsFileDataRowFromJSONTyped(json, false);
}

export function ModelsFileDataRowFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsFileDataRow {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'originalFile': json['original_file'] == null ? undefined : json['original_file'],
        'previewFile': json['preview_file'] == null ? undefined : json['preview_file'],
        'seriesDescription': json['series_description'] == null ? undefined : json['series_description'],
        'userId': json['user_id'] == null ? undefined : json['user_id'],
    };
}

export function ModelsFileDataRowToJSON(json: any): ModelsFileDataRow {
    return ModelsFileDataRowToJSONTyped(json, false);
}

export function ModelsFileDataRowToJSONTyped(value?: ModelsFileDataRow | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'original_file': value['originalFile'],
        'preview_file': value['previewFile'],
        'series_description': value['seriesDescription'],
        'user_id': value['userId'],
    };
}

