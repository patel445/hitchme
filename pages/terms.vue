<template>
  <Head>
    <Title>Hitch Me | Terms & Privacy</Title>
    <Meta
      name="description"
      content="Welcome to Hitch Me! Our app is dedicated to helping you find a life
      partner by matching you with other individuals based on shared interests
      and preferences. By using Hitch Me, you agree to these Terms and
      Conditions."
    />
    <Link rel="canonical" href="https://hitchmeapp.com/terms" />
    <Meta property="og:title" content="Hitch Me | Terms & Privacy" />
    <Meta
      property="og:description"
      content="Welcome to Hitch Me! Our app is dedicated to helping you find a life
      partner by matching you with other individuals based on shared interests
      and preferences. By using Hitch Me, you agree to these Terms and
      Conditions."
    />
    <Meta property="og:url" content="https://hitchmeapp.com/terms" />
    <Meta property="twitter:title" content="Hitch Me | Terms & Privacy" />
    <Meta
      property="twitter:description"
      content="Welcome to Hitch Me! Our app is dedicated to helping you find a life
      partner by matching you with other individuals based on shared interests
      and preferences. By using Hitch Me, you agree to these Terms and
      Conditions."
    />
    <Metadata />
  </Head>
  <Header />
  <main class="max-w-4xl mx-auto px-6 md:px-8 pt-8 md:pb-16 prose sm:prose-lg">
    <h1 class="tracking-tight">Terms & Privacy</h1>
    <h2>Introduction</h2>
    <p>
      Welcome to Hitch Me! Our app is dedicated to helping you find a life
      partner by matching you with other individuals based on shared interests
      and preferences. By using Hitch Me, you agree to these Terms and
      Conditions.
    </p>

    <h2>Terms and Conditions</h2>
    <ol>
      <li>
        <strong>Account Registration:</strong>
        You must register for an account to use our services. Account setup
        requires you to provide accurate personal details which will be used for
        the purpose of matching with other users.
      </li>
      <li>
        <strong>User Conduct:</strong>
        Users are expected to behave respectfully and legally. Any form of
        harassment, abuse, or misuse of the app will result in immediate account
        suspension or termination.
      </li>
      <li>
        <strong>Data Handling:</strong>
        We take great care in handling your personal information. We collect
        data necessary for the operation of our service, including matching you
        with potential partners.
      </li>
      <li>
        <strong>Subscription Services:</strong>
        Hitch Me offers additional features under various subscription plans.
        Details of these plans and what they entail are available on our
        platform.
      </li>
      <li>
        <strong>Intellectual Property:</strong>
        All content on Hitch Me, unless otherwise stated, is the intellectual
        property of Apeiro Growth LLC.
      </li>
    </ol>

    <h2>Privacy Policy</h2>
    <ol>
      <li>
        <strong>Collection of Information:</strong> We collect personal
        information such as names, email addresses, and demographic data
        primarily for service functionality and user communication purposes.
      </li>
      <li>
        <strong>Use of Information:</strong>
        <ul>
          <li>
            The information we collect is utilized to enhance your experience on
            our platform, match you with potential partners, and communicate
            updates and promotional offers.
          </li>
          <li>
            We use cookies to improve site navigation, analyze site usage, and
            assist in our marketing efforts.
          </li>
        </ul>
      </li>
      <li>
        <strong>Protection of Information:</strong> We implement robust security
        measures to protect your personal information from unauthorized access,
        alteration, or destruction.
      </li>
      <li>
        <strong>Sharing of Information:</strong> We do not sell or rent your
        personal information to third parties. Information may be shared with
        third-party service providers to the extent necessary for providing our
        services.
      </li>
      <li>
        <strong>Consent:</strong> By using our services, you consent to the
        collection, use, and sharing of your information as outlined in this
        privacy policy.
      </li>
    </ol>

    <h2>Changes to Our Terms and Policies</h2>
    <p>
      We reserve the right to modify our terms and conditions and privacy policy
      at any time. Updates will be posted on our platform, and your continued
      use of our services constitutes your agreement to our revised policies.
    </p>

    <h2>Contact Us</h2>
    <p>
      If you have any questions about these terms or our privacy practices,
      please contact us at
      <a
        href="mailto:hitchmeapp@gmail.com"
        class="text-primary-hover text-bold no-underline"
        >hitchmeapp@gmail.com</a
      >.
    </p>
  </main>
  <Footer />
</template>
<script setup>
import { useEmailSubscription } from "~/composables/useEmailSubscription";
const { email, message, isSuccess, handleSubmit } = useEmailSubscription();
</script>
