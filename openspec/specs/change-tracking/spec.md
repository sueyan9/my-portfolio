# Change Tracking

## Purpose

为本项目后续功能与 UI 变更保留可审阅的需求、设计、任务及验收历史，使每次修改都能说明用户目标、方案取舍、实现状态与实际验证结果，并通过 Git 和归档目录保存最终决策。

## Requirements

### Requirement: Traceable change artifacts

项目功能、行为或 UI 重设计变更 MUST 在 OpenSpec 中记录需求、设计决策和实现任务；小修复及纯文档编辑可直接保留 Git diff。

#### Scenario: A UI redesign is proposed

- **GIVEN** 用户提出涉及布局或交互的重设计
- **WHEN** 为该变更准备实施方案
- **THEN** 对应变更目录包含 proposal、design、需求 specs 和可勾选 tasks
- **AND** 设计文档记录受影响页面、移动端行为及可访问性决策

### Requirement: Evidence reflects actual verification

变更记录 MUST 区分已执行的验证与尚未验证的项目，截图记录 SHALL 标注页面、视口和交互状态。

#### Scenario: Visual verification is unavailable

- **GIVEN** 当前环境无法执行浏览器视觉检查
- **WHEN** 更新任务和验收结果
- **THEN** 记录该限制，并保留视觉验收任务为未完成
- **AND** 不将 OpenSpec 结构校验描述为视觉或功能测试通过

### Requirement: Completed changes retain history

已完成变更 SHALL 通过 OpenSpec 归档流程保留历史，并将需求变更同步至长期规范。

#### Scenario: Implementation and verification are complete

- **GIVEN** 变更实现与适用的验证任务已完成
- **WHEN** 归档该变更
- **THEN** 历史文档保留在 changes/archive 中，长期规范反映最终行为
