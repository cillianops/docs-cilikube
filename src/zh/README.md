---
home: true
icon: house
title: CiliKube
heroImage: /.vuepress/public/logo.png
# bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
# bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: CiliKube
tagline: 简洁易用的 Kubernetes 集群管理平台
actions:
  - text: 快速开始
    icon: lightbulb
    link: ./demo/
    type: primary
  - text: 文档
    icon: book
    link: ./guide/

  - text: GitHub 仓库
    icon: ./public/assets/image/github-light.svg
    link: https://github.com/ciliverse/cilikube # <--- CHANGE THIS to your repo URL
    type: default

highlights: 
  - header: 直观的集群管理
    image: assets/image/blog.svg # <-- CREATE or FIND this image (placeholder)
    # bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
    description: 通过简洁清晰的 Web UI 轻松浏览和管理 Kubernetes 核心资源，如 Pods、Deployments、PVs、Nodes 等。
    highlights:
      - title: 资源可视化
        icon:  
        details: 以卡片、表格等多种形式清晰展示资源状态和关键信息。
        # link: /guide/features/resource-management.html # Link to specific feature page

      - title: 便捷操作 (基于 YAML)
        icon: fas fa-terminal
        details: 提供基于 YAML 的创建、编辑和删除操作，保留 Kubernetes 的灵活性。
        # link: /guide/features/operations.html

  - header: 集群状态监控
    image: /assets/image/features.svg # <-- CREATE or FIND this image (placeholder)
    # bgImage: /assets/images/403.svg
    # bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    description: 集成仪表盘（如果实现）或提供关键资源的实时状态概览，帮助您快速了解集群健康状况。
    highlights:
      - title: 核心指标 (若有)
        icon: 
        details: 展示 CPU、内存、节点状态、事件等关键集群指标。
        # link: /guide/features/dashboard.html

      - title: 实时状态
        icon: fas fa-sync-alt
        details: 及时反馈 Pods、Deployments 等资源的运行状态和副本情况。
        # link: /guide/features/status.html

  - header: 易于上手与使用
    image: /assets/image/advanced.svg # <-- CREATE or FIND this image (placeholder)
    # bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    # bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    description: 专为简化 Kubernetes 常见管理任务而设计，尤其适合开发者和初学者快速入门。
    highlights:
      - title: 命名空间隔离
        icon: fas fa-object-group
        details: 清晰的命名空间切换，方便管理不同环境或项目的资源。
        # link: /guide/usage/namespaces.html

      - title: 标准化操作
        icon: fas fa-cogs # Or fas fa-wrench
        details: 提供标准化的资源列表、详情查看、日志访问、终端进入等常用功能。
        # link: /guide/usage/common-ops.html

# Keep copyright false if you don't want the default VuePress/Hope copyright
  

copyright: false
footer: <a href="https://theme-hope.vuejs.press/zh/" target="_blank">生如夏花之绚烂，死如秋叶之静美</a> 
---

