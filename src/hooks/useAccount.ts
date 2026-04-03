import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Account } from "@/model/Account";
import {
  getAccount,
  setAccount,
  toggleRecipeInAccount,
} from "@/services/account";
import type { Recipe } from "@/model/Recipe";
import { COOKBOOK_QUERY_KEY } from "@/hooks/useCookbook.ts";

const ACCOUNT_QUERY_KEY = "account";

export function useAccount() {
  return useQuery<Account | null>({
    queryKey: [ACCOUNT_QUERY_KEY],
    queryFn: () => Promise.resolve(getAccount()),
  });
}

export function useAccountMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (account: Account) => Promise.resolve(setAccount(account)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ACCOUNT_QUERY_KEY] });
    },
  });
}

export function useToggleRecipeInAccount() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (recipe: Recipe) =>
      Promise.resolve(toggleRecipeInAccount(recipe)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ACCOUNT_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [COOKBOOK_QUERY_KEY] });
    },
  });
}
