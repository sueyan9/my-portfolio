![Agentic AI Project Structure](/agentic-ai-project-structure.png)

# From AWS Agentic AI Workshop to a Real-World Commute Planner

**Published:** July 6, 2026
**Author:** Sue Yan

---

When I first joined the AWS Agentic AI Workshop, I expected to learn how to call large language models or build a chatbot. Instead, I discovered that the most valuable lesson was not about the model itself—it was about **how to design intelligent systems**.

One concept particularly stood out to me: **an AI agent should not simply answer questions; it should observe, analyse, plan, act, and explain.**

Rather than relying on a single prompt, the workshop introduced an architectural mindset where specialised components collaborate to solve a real-world problem. Different tools provide information, an orchestrator coordinates the workflow, and the final recommendation is generated from structured context rather than isolated API responses.

That way of thinking immediately reminded me of a problem I face almost every morning.

---

## A Real Problem Worth Solving

Every weekday before leaving home, I find myself opening several different apps.

- Google Maps to check traffic.
- A weather app to see if rain is expected.
- Public transport information to compare travel options.
- My calendar to check when my first meeting starts.

Each application answers its own question, but none answers the one I actually care about:

> **"When should I leave, and what is the smartest way to travel today?"**

This is not simply a routing problem—it is a **planning problem**.

The answer depends on multiple factors that constantly change:

- Current traffic conditions
- Weather forecasts
- Travel time for different transport modes
- Meeting schedules
- Personal preferences

No single service combines these pieces of information into one explainable decision.

---

## Applying the Agentic AI Mindset

Instead of building another navigation application, I decided to design the system using the architectural principles introduced in the AWS workshop.

Rather than asking one model to solve everything, I decomposed the problem into specialised responsibilities.

### Observe

The system gathers real-time context from multiple data sources, including browser geolocation, Google Maps APIs, and Open-Meteo weather data.

### Analyse

Each data source contributes a specific part of the overall picture. Route durations, weather conditions, and traffic information are evaluated independently before being combined into a shared context.

### Plan

A planning component compares different travel options, evaluates timing constraints and environmental conditions, and determines the most suitable departure time and transport mode.

### Act

The selected plan is returned to the user with the relevant travel information.

### Explain

Finally, the AI recommendation layer converts structured planning results into a clear, human-readable explanation.

Instead of simply saying:

> "Take the bus."

the system explains:

> "Leave home at 7:42 AM. Heavy traffic is expected on your usual driving route, and rain will begin in approximately 30 minutes. Taking the bus will reduce travel time and avoid peak congestion."

---

## Designing for Future Multi-Agent Collaboration

Although the current implementation focuses on weather, routing, and traffic, the architecture is intentionally designed to support future specialised agents.

Possible future agents include:

- Calendar Agent
- Public Transport Agent
- Personal Preference Agent
- Coffee Stop Agent
- Notification Agent

An orchestration layer can coordinate these agents, allowing each one to focus on a single responsibility while contributing to a shared decision.

This modular design makes the system easier to extend, test, and evolve as new capabilities are added.

---

## Reflection

The AWS Agentic AI Workshop changed how I think about AI systems.

Instead of viewing an LLM as the centre of the application, I now see it as one component within a larger architecture. Real-world AI applications require structured context, specialised tools, orchestration, and explainable decision-making.

Building this commute planner became an opportunity to apply those ideas to a genuine everyday problem. More importantly, it demonstrated that effective AI engineering is not just about generating answers—it is about designing systems that reason over real-world information and produce decisions users can understand and trust.

This project is my first step towards building practical, agentic AI applications that combine cloud-native architecture, tool integration, and intelligent planning to solve real problems.
