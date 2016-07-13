/// <reference path="../references.ts" />

class TennisGameImpl implements TennisGame {
    scoreA:number = 0;
    scoreB:number = 0;
    pointsA:number = 0;
    pointsB:number = 0;
    incrementUntil2Games:number = 15;
    incrementFrom2Games:number = 10;

    wonPoint(player:Player) {
        if (Player.A == player) {
            if (this.scoreA < 30)
                this.scoreA += this.incrementUntil2Games;
            else if (this.scoreA == 30)
                this.scoreA += this.incrementFrom2Games;
            else
                this.pointsA += 1;
        } else if (Player.B == player) {
            if (this.scoreB < 30)
                this.scoreB += this.incrementUntil2Games;
            else if (this.scoreB == 30)
                this.scoreB += this.incrementFrom2Games;
            else
                this.pointsB += 1;
        }
    }

    getScore():string {
        if (this.scoreA == this.scoreB)
            return this.getScoreWhenScoresAreEq();
        else if (this.scoreA > this.scoreB)
            return this.getScoreWhenPlayerAScoreIsGreaterThanB();
        else
            return this.getScoreWhenPlayerBScoreIsGreaterThanA();
    }

    private getScoreWhenScoresAreEq():string {
        if (this.scoreA == 0)
            return "love-all";
        else if (this.scoreA < 40)
            return this.scoreA + "-all";
        else if (this.scoreA == 40)
            return this.getScoreWhenScoresAreEqTo40();
    }

    private getScoreWhenScoresAreEqTo40():string {
        if (this.pointsA == this.pointsB)
            return "deuce";
        else if (this.pointsA > this.pointsB)
            if (this.pointsA - this.pointsB < 2)
                return "Advantage A";
            else
                return "Game A";
        else if (this.pointsA < this.pointsB)
            if (this.pointsB - this.pointsA < 2)
                return "Advantage B";
            else
                return "Game B";
    }

    private getScoreWhenPlayerAScoreIsGreaterThanB():string {
        if (this.scoreA - this.scoreB == this.scoreA)
            return this.scoreA + "-love";
        else if (this.pointsA != 0)
            return "Game A";
    }

    private getScoreWhenPlayerBScoreIsGreaterThanA():string {
        if (this.scoreB - this.scoreA == this.scoreB)
            return "love-" + this.scoreB;
        else if (this.pointsB != 0)
            return "Game B";
    }
}
