// Define the TemperatureEvent class
class TemperatureEvent {
    constructor(public value: number) {}
   }
   
   // Event Bus to handle events
   class EventBus {
    private static instance: EventBus = new EventBus();
    private listeners: ((event: TemperatureEvent) => void)[] = [];
   
    private constructor() {}
   
    static getInstance(): EventBus {
      return EventBus.instance;
    }
   
    subscribe(listener: (event: TemperatureEvent) => void): void {
      this.listeners.push(listener);
    }
   
    publish(event: TemperatureEvent): void {
      this.listeners.forEach((listener) => listener(event));
    }
   }
   
   // TemperatureSensor class to generate and publish temperature readings
   class TemperatureSensor {
    private readonly threshold: number = 30;
    private readonly minTemperature: number = 0;
    private readonly maxTemperature: number = 50;
    private enabled: boolean = false;
   
    constructor() {
      this.enabled = false;
    }
   
    start(): void {
      this.enabled = true;
      while (this.enabled) {
        const temperature = this.generateRandomTemperature();
        if (temperature > this.threshold) {
          EventBus.getInstance().publish(new TemperatureEvent(temperature));
        }
        sleep(2000); // Simulate temperature reading every 2 seconds
      }
    }
   
    stop(): void {
      this.enabled = false;
    }
   
    private generateRandomTemperature(): number {
      return Math.floor(Math.random() * (this.maxTemperature - this.minTemperature + 1) + this.minTemperature);
    }
   }
   
   // TemperatureAlarm class to listen for events and display warning messages
   class TemperatureAlarm {
    constructor() {
      EventBus.getInstance().subscribe(this.onTemperatureChanged.bind(this));
    }
   
    onTemperatureChanged(event: TemperatureEvent): void {
      console.log(`Warning! High temperature detected: ${event.value}°C`);
    }
   }
   
   // Simulate the system
   function main() {
    const sensor = new TemperatureSensor();
    const alarm = new TemperatureAlarm();
   
    sensor.start();
   
    // Simulate the system for a while (e.g., 20 seconds)
    setTimeout(() => {
      sensor.stop();
    }, 20000);
   }
   
   // Utility function to simulate sleep
   function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
   }
   
   main(); // Start the simulation