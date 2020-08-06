<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    window.onmessage = function(e) {
      if (e.origin !== "http://a.example1.com") return;
      var payload = JSON.parse(e.data);
      switch (payload.method) {
        case "set":
          localStorage.setItem(payload.key, JSON.stringify(payload.data));
          break;
        case "get":
          var parent = window.parent;
          var data = localStorage.getItem(payload.key);
          parent.postMessage(data, "http://b.example2.com");
          break;
        case "remove":
          localStorage.removeItem(payload.key);
          break;
      }
    };
  }
};
</script>

<style scoped>
</style>