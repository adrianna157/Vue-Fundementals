<template>
  <p>Edit the event here</p>
</template>
<script>
export default {
  props: ['event'],
  data: function() {
    return {
      unsavedChanges: false // <-- Flag gets set to true if anything
      //          is changed on the form
    }
  },
  beforeRouteLeave() {
    if (this.unsavedChanges) {
      console.log('made it here')
      const answer = window.confirm(
        'Do you really want to leave? You have unsaved changes!'
      )
      if (!answer) {
        return false // <-- Confirms the navigation
      }
    }
  }
}
</script>
