import { ref } from 'vue';

export function useEmailSubscription() {
    const email = ref("");
    const message = ref("");
    const isSuccess = ref(false);

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
    }

    async function handleSubmit() {
        if (!validateEmail(email.value)) {
            message.value = "Please enter a valid email address.";
            isSuccess.value = false;
            clearMessage();
            return;
        }

        const formData = new FormData();
        formData.append("EMAIL", email.value);
        formData.append("b_38fdff5e3c161f6dc35b63e9b_53d4ce82f7", "");

        try {
            const response = await fetch(
                "https://hitchmeapp.us22.list-manage.com/subscribe/post?u=38fdff5e3c161f6dc35b63e9b&amp;id=53d4ce82f7&amp;f_id=00d3c7e1f0",
                {
                    method: "POST",
                    body: formData,
                    mode: "no-cors",
                }
            );

            isSuccess.value = true;
            message.value = "Great news! You're on the list. We'll send you an exclusive email as soon as Hitch Me is ready!";
        } catch (error) {
            isSuccess.value = false;
            message.value = "Oops! Something went wrong with your sign-up. Please try again!";
        }
        clearMessage();
    }

    function clearMessage() {
        setTimeout(() => {
            message.value = "";
            email.value = "";
        }, 10000);
    }

    return {
        email,
        message,
        isSuccess,
        handleSubmit
    };
}