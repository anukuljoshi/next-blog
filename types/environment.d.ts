declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MONGODB_USERNAME: string;
			MONGODB_PASSWORD: string;
			MONGODB_CLUSTER: string;
			MONGODB_COLLECTION: string;
		}
	}
}

export {};
