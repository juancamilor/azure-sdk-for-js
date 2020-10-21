/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/privateEndpointConnectionsMappers";
import * as Parameters from "../models/parameters";
import { AzureMediaServicesContext } from "../azureMediaServicesContext";

/** Class representing a PrivateEndpointConnections. */
export class PrivateEndpointConnections {
  private readonly client: AzureMediaServicesContext;

  /**
   * Create a PrivateEndpointConnections.
   * @param {AzureMediaServicesContext} client Reference to the service client.
   */
  constructor(client: AzureMediaServicesContext) {
    this.client = client;
  }

  /**
   * Get all private endpoint connections.
   * @summary Get all private endpoint connections.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsListResponse>
   */
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): void;
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): Promise<Models.PrivateEndpointConnectionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionsListResponse>;
  }

  /**
   * Get private endpoint connection.
   * @summary Get private endpoint connection.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param name
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, name: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param name
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, name: string, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  get(resourceGroupName: string, accountName: string, name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointConnection>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnection>): Promise<Models.PrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        name,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionsGetResponse>;
  }

  /**
   * Update private endpoint connection.
   * @summary Update private endpoint connection.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param name
   * @param parameters The request parameters
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, accountName: string, name: string, parameters: Models.PrivateEndpointConnection, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param name
   * @param parameters The request parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, name: string, parameters: Models.PrivateEndpointConnection, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param name
   * @param parameters The request parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, name: string, parameters: Models.PrivateEndpointConnection, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  createOrUpdate(resourceGroupName: string, accountName: string, name: string, parameters: Models.PrivateEndpointConnection, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointConnection>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnection>): Promise<Models.PrivateEndpointConnectionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        name,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionsCreateOrUpdateResponse>;
  }

  /**
   * Delete private endpoint connection.
   * @summary Delete private endpoint connection.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param name
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, name: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param name
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        name,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/privateEndpointConnections",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/privateEndpointConnections/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/privateEndpointConnections/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.PrivateEndpointConnection,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/privateEndpointConnections/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};