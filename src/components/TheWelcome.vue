<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>About the Diary</template>
    Diary will help you improve your training, memorization of commands and effectiveness. More and
    different text might be here.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>
    Become part of agility community which want to achieve best progress in short time! Community
    features will be coming!
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support the Diary</template>

    Do you like this project? Wanna support us so we can bring you more interesting features? You
    can help us by
    <a href="#" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
