<script setup>
  const props = defineProps({
    value: { type: Number, required: true },
    size: { type: Number, default: 44 },
    stroke: { type: Number, default: 3 },
  })

  const displayValue = computed(() => Math.min(100, Math.max(0, props.value)))

  const center = computed(() => props.size / 2)
  const radius = computed(() => (props.size - props.stroke) / 2)
  const circumference = computed(() => 2 * Math.PI * radius.value)
  const dashOffset = computed(() =>
    circumference.value * (1 - displayValue.value / 100)
  )

  const color = computed(() => {
    const v = displayValue.value
    if (v >= 70) return '#22c55e'   // green
    if (v >= 45) return '#eab308'   // yellow
    return '#ef4444'                // red
  })
</script>

<template>
  <div class="flex items-center justify-center">
    <svg :width="size" :height="size">
      <circle
        :cx="center" :cy="center" :r="radius"
        :stroke-width="stroke"
        class="text-gray-200"
        stroke="currentColor"
      />
      <circle
        :cx="center" :cy="center" :r="radius"
        :stroke-width="stroke"
        :stroke="color"
        fill="none"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        :transform="`rotate(-90 ${center} ${center})`"
      />
    </svg>

    <span class="absolute text-sm text-white flex">
      {{ Math.round(displayValue) }}
      <span class="text-[8px]">%</span>
    </span>
  </div>
</template>
