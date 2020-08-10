import { EventBus } from "../../_helpers/event.bus";

export default {
    data: () => ({
        snackbar: false,
        text: '',
    }),

    mounted() {
        EventBus.$on('toto', (snackBar, text) => {
            console.log(snackBar)
            this.snackbar = snackBar;

            console.log(text)
            this.text = text;
        })
    }
}