import {Component} from "react";

class CurrentDate extends Component {
    state = {
        now: new Date(),
    };

    formatDate = (now) => {
        // formatDate jest czysta funkcja (pure function)
        const hh = now.getHours();
        const mm = now.getMinutes();
        const ss = now.getSeconds();
        const d = now.getDate();
        const m = now.getMonth() + 1;
        const y = now.getFullYear();

        // Godziny:Minuty:Sekundy, Dzień/Miesiąc/Rok
        return `${hh}:${mm}:${ss}, ${d}/${m}/${y}`;
    };
    handleClick = () => this.setState({ now: new Date() });

        render() {
            const { now } = this.state;
            return (
                <>
                    <p>{this.formatDate(now)}</p>
                    <button onClick={this.handleClick}>Zaktualizuj datę</button>
                </>
            );
        }
}

export default CurrentDate;

