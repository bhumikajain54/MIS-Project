package com.example.MIS_Project.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "AgentPOS")
public class AgentPOS {
    @Id
    @NotNull(message = "agentPosNameCode1 is required")
    private String agentPosNameCode1;
    private String agentPosNameCode2;

    public String getAgentPosNameCode1() {
        return agentPosNameCode1;
    }

    public void setAgentPosNameCode1(String agentPosNameCode1) {
        this.agentPosNameCode1 = agentPosNameCode1;
    }

    public String getAgentPosNameCode2() {
        return agentPosNameCode2;
    }

    public void setAgentPosNameCode2(String agentPosNameCode2) {
        this.agentPosNameCode2 = agentPosNameCode2;
    }

    // Getters and setters...
}
