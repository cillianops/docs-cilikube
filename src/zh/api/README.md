---
title: API 参考
icon: gears
---

# ⚙️ API 参考

本部分提供 CiliKube 后端 API 的详细参考文档。

CiliKube 后端提供了一套 RESTful API，供前端 UI 或其他外部应用调用，以实现对 Kubernetes 集群的管理。

**API 文档 (推荐):**

我们推荐使用 [Swagger UI](https://swagger.io/tools/swagger-ui/) 或 [OpenAPI Generator](https://openapi-generator.tech/) 来生成交互式的 API 文档。

*   **[在线 Swagger UI (如果已部署)]([你的 Swagger UI 链接]):** (推荐) 你可以直接在这里浏览所有 API 端点、参数、请求体和响应示例，并进行在线调用测试。
*   **[OpenAPI 规范文件 (openapi.yaml/json)]([你的 OpenAPI 文件链接]):** 你可以下载此文件，并使用各种 OpenAPI 工具进行处理。

**(如果暂时没有自动生成的文档)**

以下是主要 API 端点的概述 (请根据你的实际 API 详细列出)：

*   **认证 API:**
    *   `POST /api/login` (如果需要 CiliKube 自身登录)
    *   `GET /api/userinfo`
*   **集群管理 API:**
    *   `GET /api/clusters`
    *   `POST /api/clusters`
    *   `GET /api/clusters/{clusterId}`
    *   `DELETE /api/clusters/{clusterId}`
*   **Kubernetes 资源 API (通常按资源类型组织):**
    *   `GET /api/clusters/{clusterId}/namespaces`
    *   `GET /api/clusters/{clusterId}/namespaces/{namespace}/pods`
    *   `GET /api/clusters/{clusterId}/namespaces/{namespace}/pods/{podName}`
    *   `DELETE /api/clusters/{clusterId}/namespaces/{namespace}/pods/{podName}`
    *   `POST /api/clusters/{clusterId}/namespaces/{namespace}/deployments` (使用请求体提交 YAML 或 JSON)
    *   `GET /api/clusters/{clusterId}/namespaces/{namespace}/deployments/{deploymentName}`
    *   ... (覆盖所有支持的 K8s 资源类型)
*   **日志与终端 API:**
    *   `GET /api/clusters/{clusterId}/namespaces/{namespace}/pods/{podName}/logs` (支持流式传输 `?follow=true`)
    *   `WebSocket /api/clusters/{clusterId}/namespaces/{namespace}/pods/{podName}/exec` (用于 Web Terminal)

请参考自动生成的 API 文档获取最准确、最详细的信息。