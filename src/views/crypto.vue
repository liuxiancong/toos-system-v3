<template>
  <div class="pa-20">
    <h3 class="text-28 pb-20">AES解密</h3>
    <el-form label-width="auto">
      <el-form-item label="key：">
        <el-input v-model="key" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="iv：">
        <el-input v-model="iv" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="密文：">
        <el-input v-model="ciphertext" type="textarea" clearable show-word-limit :rows="6" placeholder="请输入" />
      </el-form-item>
      <!-- <el-form-item label="明文：">
        {{ plaintext}}
      </el-form-item> -->
      <el-form-item label="JSON：">
        <json-viewer :value="plaintextJson" :expandDepth="8" sort boxed :copyable="{ copyText: '复制', copiedText: '复制成功' }" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { aesDecrypt } from '@/utils/cryptoJs'

  const key = ref('3644a684f98ea8fe')
  const iv = ref('223c713b77189a77')
  const ciphertext = ref('')

  const plaintext = computed(() => {
    return aesDecrypt(ciphertext.value, key.value, iv.value)
  })
  
  const plaintextJson = computed(() => {
    let result = ''
    try {
      result = JSON.parse(plaintext.value)
    } catch (e: any) {
      result = e
    }
    return result 
  })
</script>
