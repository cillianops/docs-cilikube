---
title: 快速入门 (5 分钟)
icon: tachometer-alt # 或者 'stopwatch'
order: 2
---

# 🚀 快速入门 (5 分钟)

本指南将带你用最快的速度部署并运行 CiliKube，连接到你的 Kubernetes 集群。

## 前提条件

1.  **拥有一个 Kubernetes 集群:** 你需要一个可以访问的 K8s 集群。如果你还没有，可以使用以下工具在本地快速创建一个：
    *   [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/) (推荐，基于 Docker)
    *   [Minikube](https://minikube.sigs.k8s.io/docs/start/)
    *   [k3d](https://k3d.io/) (基于 K3s)
    *   或者使用云服务商提供的 K8s 集群 (如 GKE, EKS, AKS)。
2.  **配置好 `kubectl`:** 确保你的 `kubectl` 可以正常连接到你的 K8s 集群 (`kubectl get nodes` 可以成功执行)。CiliKube 后端通常需要读取你的 Kubeconfig 文件来访问集群。
3.  **安装 Docker (如果使用 Docker 部署):** [安装 Docker](https://docs.docker.com/engine/install/)。

## 使用 Docker 快速启动 CiliKube

这是最简单的方式，推荐用于本地体验和测试。

```bash
docker run -d --name cilikube \
  -p 8080:8080 \ # 将容器的 8080 端口映射到宿主机的 8080 端口
  -v ${HOME}/.kube/config:/app/kubeconfig:ro \ # 将你的 Kubeconfig 文件挂载到容器内 (只读)
  [你的 Docker Hub 仓库]/cilikube:[最新版本标签, e.g., v0.1.0 或 latest]

  参数说明:
-d: 后台运行容器。
--name cilikube: 给容器命名为 cilikube。
-p 8080:8080: 映射端口。如果宿主机 8080 已被占用，可以修改为其他端口，例如 -p 9090:8080。
-v ${HOME}/.kube/config:/app/kubeconfig:ro: (关键) 将你本地的 Kubeconfig 文件挂载到容器内的 /app/kubeconfig 路径下，并设置为只读 (ro)。CiliKube 后端会读取这个文件来连接你的 K8s 集群。请确保 ${HOME}/.kube/config 是你正确的 Kubeconfig 路径。
[你的 Docker Hub 仓库]/cilikube:[tag]: 指定 CiliKube 的 Docker 镜像。

```

检查状态:
docker ps # 应该能看到名为 cilikube 的容器在运行
docker logs cilikube # 查看启动日志，确认没有错误
Use code with caution.

```Bash
访问 CiliKube UI
打开你的浏览器，访问 http://localhost:8080 (如果你修改了端口映射，请使用对应的端口)。
你应该能看到 CiliKube 的登录界面或主界面。如果 CiliKube 默认连接了你挂载的 Kubeconfig 中的 current-context，你可能直接看到集群的 Dashboard。
![alt text](placeholder.png)
```

下一步
恭喜！你已经成功运行了 CiliKube。
接下来，你可以：
浏览 用户指南 探索 CiliKube 的各项功能。
查看 安装部署 获取更详细或其他的安装方式 (如 Helm)。
尝试 部署一个 Web 应用 的教程。