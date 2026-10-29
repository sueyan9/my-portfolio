# 项目变更与 UI 设计追踪

OpenSpec 把需求、设计决策、实现任务和最终规范放在仓库中，与代码一起通过 Git 追踪。
它不会自动录屏、保存截图或记录每次代码编辑；截图需显式保存，文件历史由 Git 管理。

## 日常流程

1. 在 Codex 中使用 `$openspec-propose` 并描述改动，例如：“调整项目卡片在手机上的布局，保留现有配色”。桌面应用也可从 Skills 选择 `openspec-propose`；若未显示，重新打开项目或重启应用。
2. 查看 `openspec/changes/<change-name>/` 中的 `proposal.md`、`design.md`、`specs/` 和 `tasks.md`。UI 改动按照 [设计清单](templates/ui-design.md) 补全方案。
3. 使用 `$openspec-update-change` 记录需求或设计调整，再用 `$openspec-apply-change` 实施并更新任务勾选状态。
4. 保存实际验证结果；使用 `openspec validate --all --strict --no-interactive` 检查文档结构。结构校验不代表功能或视觉验收通过。
5. 完成后使用 `$openspec-archive-change`，把变更归档至 `changes/archive/`，并合并规范。将相关代码、文档和截图一起提交 Git。

终端查看进度：

```sh
openspec list
openspec status --change <change-name>
openspec list --specs
```

## 目录约定

- `config.yaml`：项目背景、中文输出和各类文档规则。
- `specs/`：已确认的长期规范；初始化不声称整个旧站已通过验收。
- `changes/<change-name>/`：正在进行的变更及设计过程。
- `changes/<change-name>/assets/`：该变更的参考图、改动前后截图等，文档使用相对链接。
- `changes/archive/`：已完成变更的历史。
- `templates/ui-design.md`：填写 `design.md` 时参考的清单，不是自定义 OpenSpec schema。
- `.agents/skills/openspec-*/`：CLI 生成的 Codex 工作流技能。

当前 UI 代码入口：`src/App.jsx`、`src/Home.jsx`、`src/components/`。
颜色变量见 `src/index.css`，全局页面样式见 `src/App.css`，各组件保留自己的样式文件。

OpenSpec CLI 当前使用本机已有的 1.14.2，未加入应用运行时依赖。
其他机器请先按 [官方安装说明](https://openspec.dev/docs/installation) 安装 CLI，再运行上述命令。
